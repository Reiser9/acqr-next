/* This InvalidEmail requires Tailwind CSS v2.0+ */
import { XCircleIcon } from '@heroicons/react/solid'
import InvalidEmailProps from '../../interfaces/InvalidEmailProps'

export default function InvalidEmail({setFailedEmailVerification}: InvalidEmailProps) {
  return (
    <div className="rounded-md bg-red-50 p-4 invalid"
    onClick={()=>setFailedEmailVerification(false)}>
      <div className="flex">
        <div className="flex-shrink-0">
          <XCircleIcon className="h-10 w-10 text-red-400" aria-hidden="true" />
        </div>
        <div className="ml-3">
          <h3 className="text-2xl font-medium text-red-800">Invalid Email, try again</h3>
          <div className="mt-2 text-sm text-red-700">
          </div>
        </div>
      </div>
    </div>
  )
}
