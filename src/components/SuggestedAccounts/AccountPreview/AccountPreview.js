import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://scontent.fdad2-1.fna.fbcdn.net/v/t1.6435-9/147367105_3862888187067319_6803888157118605918_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=7a1959&_nc_ohc=NDmY6sKTLj4AX8as19s&_nc_ht=scontent.fdad2-1.fna&oh=00_AfBpRw8N2kBu8QRwIbWyKxH6OjWkz9or3j8NZHKkqf2BRA&oe=65FEA80F"
                    alt=""
                />
                <Button primary>Follow</Button>
            </div>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>quocbaole</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Quốc Bảo Lê</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Follow</span>
                    <strong className={cx('value')}>5.2M </strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
