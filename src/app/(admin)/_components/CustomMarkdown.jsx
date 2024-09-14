'use client'
import MDEditor from '@uiw/react-md-editor'

const CustomMarkdown = ({ name, value, fnValue, placeholder }) => {
    return (
        <MDEditor
            id={name}
            name={name}
            value={value}
            onChange={fnValue}
            height="240px"
            visibleDragbar={false}
            textareaProps={{
                placeholder: placeholder || 'Enter body content here...',
            }}
            className="rounded-xl"
        />
    )
}

export default CustomMarkdown
