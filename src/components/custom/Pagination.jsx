import { Button } from '@/components/ui/button'

const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <nav className="mt-2">
            <ul className="flex gap-1 justify-end items-center">
                {pageNumbers.map(number => (
                    <li key={number}>
                        <Button onClick={() => paginate(number)}>
                            {number}
                        </Button>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination
