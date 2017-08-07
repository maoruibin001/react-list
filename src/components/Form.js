const Form = ({onClick}) => {
    let input = {};
    return <div>
        <form onSubmit={e => {
            e.preventDefault();
            if (!input.value) return;
            onClick(input.value);
            input.value = '';
            }}>
            <input type="text" ref={node => input=node}/>
            <button type="submit">Add A text</button>
            </form>
    </div>
}

export default Form;