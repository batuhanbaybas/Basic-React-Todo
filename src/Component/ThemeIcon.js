
import { useDispatch, useSelector } from 'react-redux'
import { themeSelector, toggleTheme } from '../Redux/themeSlice'

const ThemeIcon = () => {
    const dispatch = useDispatch()

    const themeMode = useSelector(themeSelector)

    const handleTheme = () => {
        dispatch(toggleTheme())
        console.log("first")
    }

    return (
        <div className='py-3'>
            <button onClick={handleTheme} className={`btn btn-${themeMode ? "light" : "dark"} ms-auto`}>
                {
                    themeMode ? "Light" : "Dark"
                }
            </button>

        </div>
    )
}

export default ThemeIcon