const Divider = ({
    type = 'border-solid',
    border = 'border-b-[#393939]',
    className = '',
}) => {
    return (
        <div
            className={`${type} ${border} ${className} w-full border-b-[.5px] mt-1`}>
        </div>
    )
}

export default Divider
