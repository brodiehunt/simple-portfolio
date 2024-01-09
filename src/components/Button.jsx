export default function Button({children, type, disabled}) {
  return (
    <button 
      type={type} 
      className="btn-primary"
      disabled={disabled}
    >
      {children}
    </button>
  )
}