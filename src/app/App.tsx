import './styles/index.scss'
import { useTheme } from './providers/ThemeProvider/lib/useTheme'
import { classNames } from '../helpers/classNames/classNames'
import { AppRouter } from './providers/router'
import { Navbar } from 'widgets/Navbar'



const App = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <AppRouter />
        </div>
    )
}

export default App