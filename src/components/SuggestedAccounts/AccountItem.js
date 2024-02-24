import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import styles from './SuggestedAccounts.module.scss';
import Tippy from '@tippyjs/react/headless';
import AccountPreview from './AccountPreview/AccountPreview';
import { Wrapper as PopperWrapper } from '~/components/Popper';

const cx = classNames.bind(styles);

function AccountItem() {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    };
    return (
        <Tippy interactive delay={[800, 0]} offset={[-20, 0]} placement="bottom" render={renderPreview}>
            <div className={cx('account-item')}>
                <img
                    className={cx('avatar')}
                    src="https://scontent.fdad2-1.fna.fbcdn.net/v/t1.6435-9/147367105_3862888187067319_6803888157118605918_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=7a1959&_nc_ohc=NDmY6sKTLj4AX8as19s&_nc_ht=scontent.fdad2-1.fna&oh=00_AfBpRw8N2kBu8QRwIbWyKxH6OjWkz9or3j8NZHKkqf2BRA&oe=65FEA80F"
                    alt=""
                />
                <div className={cx('item-info')}>
                    <p className={cx('nickname')}>
                        <strong>quocbaole</strong>
                        <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                    </p>
                    <p className={cx('name')}>Quốc Bảo Lê</p>
                </div>
            </div>
        </Tippy>
    );
}

AccountItem.propTyles = {};

export default AccountItem;
