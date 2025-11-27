function Hello() {
    const name = 'Vishwam';
    const age = 20; 
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted");
    }
    return (
        <form onSubmit={handleSubmit}>
            <h1>Hello {name} you are {age} years old.</h1>
            <button type="submit">Submit</button>
        </form>
    )
}


export default Hello;

