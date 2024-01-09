
export default function Link({url, label, children}) {

  return (
    <a href={url} aria-label={label} className="btn-primary" style={{textDecoration: 'none'}}>
      {children}
    </a>
  )
}