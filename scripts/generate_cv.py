from pathlib import Path
from reportlab.lib.colors import HexColor
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import BaseDocTemplate, Frame, PageTemplate, Paragraph, Spacer, Table, TableStyle, KeepTogether

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "output" / "pdf" / "reno-abdi-gustian-cv.pdf"
PUBLIC = ROOT / "public" / "documents" / "reno-abdi-gustian-cv.pdf"
OUTPUT.parent.mkdir(parents=True, exist_ok=True)
PUBLIC.parent.mkdir(parents=True, exist_ok=True)

INK = HexColor("#0A0A0A")
INDIGO = HexColor("#4F46E5")
YELLOW = HexColor("#FACC15")
MUTED = HexColor("#4B5563")
LIGHT = HexColor("#F8FAFC")

styles = getSampleStyleSheet()
name_style = ParagraphStyle("Name", parent=styles["Title"], fontName="Helvetica-Bold", fontSize=25, leading=27, textColor=INK, spaceAfter=3)
role_style = ParagraphStyle("Role", parent=styles["Normal"], fontName="Helvetica-Bold", fontSize=11, leading=14, textColor=INDIGO, spaceAfter=8)
contact_style = ParagraphStyle("Contact", parent=styles["Normal"], fontName="Helvetica", fontSize=8.5, leading=12, textColor=MUTED)
section_style = ParagraphStyle("Section", parent=styles["Heading2"], fontName="Helvetica-Bold", fontSize=11, leading=14, textColor=INK, spaceBefore=7, spaceAfter=5, borderWidth=0, borderPadding=0)
body_style = ParagraphStyle("Body", parent=styles["BodyText"], fontName="Helvetica", fontSize=9, leading=13, textColor=MUTED, alignment=TA_LEFT)
item_title = ParagraphStyle("ItemTitle", parent=styles["BodyText"], fontName="Helvetica-Bold", fontSize=9.5, leading=12, textColor=INK)
small_style = ParagraphStyle("Small", parent=body_style, fontSize=8.2, leading=11)


def header_footer(canvas, doc):
    canvas.saveState()
    canvas.setFillColor(INDIGO)
    canvas.rect(0, A4[1] - 8 * mm, A4[0], 8 * mm, stroke=0, fill=1)
    canvas.setFillColor(YELLOW)
    canvas.rect(0, A4[1] - 8 * mm, 38 * mm, 8 * mm, stroke=0, fill=1)
    canvas.setFont("Helvetica", 7.5)
    canvas.setFillColor(MUTED)
    canvas.drawRightString(A4[0] - 16 * mm, 9 * mm, "Reno Abdi Gustian - Curriculum Vitae")
    canvas.restoreState()


doc = BaseDocTemplate(str(OUTPUT), pagesize=A4, leftMargin=16 * mm, rightMargin=16 * mm, topMargin=16 * mm, bottomMargin=15 * mm)
frame = Frame(doc.leftMargin, doc.bottomMargin, doc.width, doc.height, id="main")
doc.addPageTemplates(PageTemplate(id="cv", frames=[frame], onPage=header_footer))

story = [
    Paragraph("RENO ABDI GUSTIAN", name_style),
    Paragraph("Junior Programmer | Web Developer", role_style),
    Paragraph("Tegal, Indonesia &nbsp; | &nbsp; renoabdigustian18@gmail.com &nbsp; | &nbsp; github.com/renoabdii", contact_style),
    Paragraph("linkedin.com/in/reno-abdi-gustian-95a907255", contact_style),
    Spacer(1, 6),
    Paragraph("PROFIL", section_style),
    Paragraph("Mahasiswa Teknik Informatika Universitas Harkat Negeri (2022-2026) dengan pengalaman magang sebagai Frontend Web Developer di Digivasi. Memiliki minat pada pengembangan aplikasi web modern serta terbiasa membangun antarmuka yang responsif, terstruktur, dan mudah digunakan. Siap berkontribusi sebagai Junior Programmer atau Web Developer.", body_style),
    Paragraph("PENGALAMAN", section_style),
    KeepTogether([
        Table([[Paragraph("Frontend Web Developer Intern", item_title), Paragraph("Juli 2025 - November 2025", small_style)]], colWidths=[115 * mm, 63 * mm], style=TableStyle([("VALIGN", (0, 0), (-1, -1), "TOP"), ("ALIGN", (1, 0), (1, 0), "RIGHT"), ("BOTTOMPADDING", (0, 0), (-1, -1), 1)])),
        Paragraph("Digivasi", role_style),
        Paragraph("Menjalani program magang dengan fokus pada pengembangan antarmuka aplikasi web.", body_style),
    ]),
    Paragraph("PENDIDIKAN", section_style),
    KeepTogether([
        Table([[Paragraph("Teknik Informatika", item_title), Paragraph("2022 - 2026", small_style)]], colWidths=[115 * mm, 63 * mm], style=TableStyle([("VALIGN", (0, 0), (-1, -1), "TOP"), ("ALIGN", (1, 0), (1, 0), "RIGHT"), ("BOTTOMPADDING", (0, 0), (-1, -1), 1)])),
        Paragraph("Universitas Harkat Negeri", role_style),
    ]),
    Paragraph("PROYEK PILIHAN", section_style),
]

projects = [
    ("InventoryPro - Point of Sale", "Aplikasi POS berbasis web untuk transaksi kasir, pengelolaan shift, riwayat transaksi, dan pemantauan stok."),
    ("InventoryPro - Warehouse Inventory", "Sistem inventori gudang untuk produk, barang masuk, pergerakan stok, supplier, purchase order, dan laporan."),
]
for title, description in projects:
    story.extend([Paragraph(title, item_title), Paragraph(description, small_style), Spacer(1, 3)])

story.extend([
    Paragraph("KEAHLIAN", section_style),
    Table([
        [Paragraph("Frontend", item_title), Paragraph("React, TypeScript, JavaScript, Tailwind CSS", body_style)],
        [Paragraph("Backend", item_title), Paragraph("Node.js, Python", body_style)],
        [Paragraph("Database & Tools", item_title), Paragraph("PostgreSQL, Docker, Git, GitHub", body_style)],
    ], colWidths=[42 * mm, 136 * mm], style=TableStyle([
        ("BACKGROUND", (0, 0), (0, -1), LIGHT),
        ("BOX", (0, 0), (-1, -1), 0.75, INK),
        ("INNERGRID", (0, 0), (-1, -1), 0.35, HexColor("#CBD5E1")),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("LEFTPADDING", (0, 0), (-1, -1), 6),
        ("RIGHTPADDING", (0, 0), (-1, -1), 6),
        ("TOPPADDING", (0, 0), (-1, -1), 5),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
    ])),
])

doc.build(story)
PUBLIC.write_bytes(OUTPUT.read_bytes())
print(OUTPUT)
print(PUBLIC)
