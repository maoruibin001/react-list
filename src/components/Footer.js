import React from 'react';
import FooterLink from '../containers/FooterLink';
const Footer = () => {
    return <div>
        show:
        <FooterLink filter="SHOW_ALL">
            ALL
        </FooterLink>
        {', '}
        <FooterLink filter="SHOW_ACTIVE">
            ACTIVE
        </FooterLink>
        {', '}
        <FooterLink filter="SHOW_COMPLETED">
            COMPLETED
        </FooterLink>
    </div>
}

export default Footer;