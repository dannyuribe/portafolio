import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './App.css';
import About from './features/About/About';
import Hero from './features/Hero/Hero';
import { Contact } from './features/landing/components/Contact';
import { EducationExperience } from './features/landing/components/EducationExperience';
import { Footer } from './features/landing/components/Footer';
import { Navbar } from './features/landing/components/Navbar';
//import { Projects } from './features/landing/components/Projects';
import { Services } from './features/landing/components/Services';
import { Skills } from './features/landing/components/Skills';
//import { Testimonials } from './features/landing/components/Testimonials';
import { WorkProcess } from './features/landing/components/workProcess';
function App() {
    return (_jsxs("main", { className: "font-sans scroll-smooth bg-white text-gray-900", children: [_jsx(Navbar, {}), _jsx(Hero, {}), _jsx(About, {}), _jsx(Services, {}), _jsx(WorkProcess, {}), _jsx(Skills, {}), _jsx(EducationExperience, {}), _jsx(Contact, {}), _jsx(Footer, {})] }));
}
export default App;
