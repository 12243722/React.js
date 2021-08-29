import { IRouteComponentProps, Redirect } from 'umi';
import { FC } from 'react';

const Layouts: FC<IRouteComponentProps> =({location, children}: IRouteComponentProps) => {

  
 if (location.pathname === '/') {
   return <Redirect from="/" to="/admin" exact></Redirect>
   } else {
   return <div>{children}</div>
    }
 }

export default Layouts;