import { useState, useEffect } from 'react';
import { NavLink } from '.';
import { userService } from 'services';
export { Nav };

function Nav() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const subscription = userService.user.subscribe(x => setUser(x));
        return () => subscription.unsubscribe();
    }, []);

    function logout() {
        userService.logout();
    }

    // only show nav when logged in
    if (!user) return null;
    
    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <div className="navbar-nav">
                 <NavLink href="/task" className="nav-item nav-link">Tasks</NavLink>
                 <NavLink href="/location" className="nav-item nav-link">Location</NavLink>
                <NavLink href="/users" className="nav-item nav-link">Profiles</NavLink>
                <a onClick={logout} className="nav-item nav-link">Logout</a>
            </div>
        </nav>
    );
} 