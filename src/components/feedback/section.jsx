export const Section = ({title, children}) =>{
    return (
        <section className="section">
            <p className="title">{title}</p>
            {children}
        </section>
    )
}