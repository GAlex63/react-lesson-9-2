import { useState } from "react";


export default function useSearch() {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (event) => {
		const query = event.target.value;
		setSearchQuery(query);
	};

    return { searchQuery, setSearchQuery, handleSearch}
}