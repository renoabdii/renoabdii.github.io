import { getTechIcon } from '../../lib/techIcons'
import Badge from '../shared/Badge'

interface TechStackBadgeProps {
  techs: string[]
}

export default function TechStackBadge({ techs }: TechStackBadgeProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {techs.map((tech) => (
        <Badge key={tech} className="flex items-center gap-1.5">{getTechIcon(tech)}{tech}</Badge>
      ))}
    </div>
  )
}
