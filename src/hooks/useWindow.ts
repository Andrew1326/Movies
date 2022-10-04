import { useEffect, useState } from "react";

const useWindow = (): React.Dispatch<React.SetStateAction<[string, string | undefined] | []>> => {
    const [urlData, setUrlData] = useState<[string, string | undefined] | []>([])

    //* open
    const _open = (): void => {
        const [url, target] = urlData
        window.open(url, target)
    }

    //* opening new window
    useEffect(() => {
        urlData[0] && _open()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [urlData])

    return setUrlData
}

export default useWindow