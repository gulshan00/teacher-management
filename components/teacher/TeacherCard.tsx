import { Teacher } from '@/types/teacher'
import { Mail, BookOpen, User } from 'lucide-react'

type Props = {
  teacher: Teacher
  onClick?: () => void
  showEmail?: boolean
  className?: string
}

export default function TeacherCard({ 
  teacher, 
  onClick, 
  showEmail = true, 
  className = '' 
}: Props) {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (onClick && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault()
      onClick()
    }
  }

  const cardClasses = `
    bg-white border border-gray-200 rounded-lg p-6 
    shadow-sm hover:shadow-lg hover:border-gray-300 
    transition-all duration-200 ease-in-out
    ${onClick ? 'cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2' : ''}
    ${className}
  `.trim()

  return (
    <div
      className={cardClasses}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      tabIndex={onClick ? 0 : undefined}
      role={onClick ? 'button' : undefined}
      aria-label={onClick ? `View details for ${teacher.name}` : undefined}
    >
      <div className="flex items-start gap-4">
        {/* Avatar placeholder */}
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
          <User className="w-6 h-6 text-white" />
        </div>
        
        <div className="flex-1 min-w-0">
          <h2 className="text-xl font-semibold text-gray-900 mb-2 truncate">
            {teacher.name}
          </h2>
          
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <BookOpen className="w-4 h-4 flex-shrink-0" />
              <span className="font-medium">Subject:</span>
              <span className="truncate">{teacher.subject}</span>
            </div>
            
            {showEmail && teacher.email && (
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a 
                  href={`mailto:${teacher.email}`}
                  className="text-blue-600 hover:text-blue-800 hover:underline truncate transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  {teacher.email}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Optional badge for additional info */}
      {/* {teacher.department && (
        <div className="mt-4 pt-3 border-t border-gray-100">
          <span className="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium">
            {teacher.department}
          </span>
        </div>
      )} */}
    </div>
  )
}