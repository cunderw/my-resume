import React from 'react'

const LoadingSpinner: React.FC = () => {
  return (
    <div
      className="flex items-center justify-center p-8"
      data-testid="loading-spinner"
    >
      <div className="size-12 animate-spin rounded-full border-b-2 border-gray-600"></div>
    </div>
  )
}

export default LoadingSpinner
