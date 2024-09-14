'use client'

import MDEditor from '@uiw/react-md-editor'

const CustomMarkdown = ({ value, fnValue, placeholder }) => {
    return (
        <MDEditor
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
