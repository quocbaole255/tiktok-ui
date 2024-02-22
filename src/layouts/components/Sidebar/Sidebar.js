import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import { HomeIcon, UserGroupIcon, LiveIcon } from '~/components/Icons';
import config from '~/config';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} />
                <MenuItem title="Following" to={config.routes.following} icon={<UserGroupIcon />} />
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} />
            </Menu>
        </aside>
    );
}

export default Sidebar;
