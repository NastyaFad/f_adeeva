import './Filters.css'

export default function Filter({ sorting, onSortingChange }) {
    return (
        <>
        
            <div className="filter">

                <div className="select">

                    <label htmlFor="filter"></label>
                    <select id="filter" value={sorting} onChange={onSortingChange}>
                        <option value="default">По умолчанию</option>
                        <option value="priceAscending">По возрастанию цены</option>
                        <option value="priceDescending">По убыванию цены</option>
                        <option value="nameA">По наименованию (A-Z)</option>
                        <option value="nameZ">По наименованию (Z-A)</option>
                    </select>
        
                </div>


            </div>
        
        </>
    )
}