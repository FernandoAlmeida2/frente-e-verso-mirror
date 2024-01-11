"use client";

import { useState } from "react";

export function useToggleSearch() {
    const [toggleSearch, setToggleSearch] = useState(false);

    function toggle() {
        setToggleSearch(!toggleSearch)
    }

    return {
        toggleSearch,
        toggle
    }
}