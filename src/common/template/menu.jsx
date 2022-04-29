import React from 'react';

import MenuItem from './menuItem';
import MenuTree from './menuTree';

export default props => (
    <ul className="sidebar-menu">
        <MenuItem path="#" label="Dasboard" icon="dashboard" />
        <MenuTree path="#" label="Cadastro" icon="edit">
            <MenuItem path="#billingCycles" label="Ciclos de Pagamentos" icon="usd" />
        </MenuTree>
    </ul>
)