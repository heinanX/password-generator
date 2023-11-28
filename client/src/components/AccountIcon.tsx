import BathtubIcon from '@mui/icons-material/Bathtub';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import { useState } from 'react';

const AccountIcon = () => {
    const [isLoggedIn, setIsLoggedIn ] = useState<boolean>(false);
    
  return (
    <button
    className={'hover:cursor-pointer hover:text-cyan-500 dark:text-white dark:hover:text-cyan-500 hover:bg-black dark:hover:bg-white rounded-full py-6px px-7px'}
    onClick={() => isLoggedIn ? setIsLoggedIn(false): setIsLoggedIn(true)}>
    {isLoggedIn ? <VpnKeyIcon /> : <BathtubIcon /> }
  </button>
        
  );
}

export default AccountIcon