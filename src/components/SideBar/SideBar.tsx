import React from 'react';
import { Menu } from 'antd';
import {
    BulbFilled,
    NotificationFilled,
    CalendarFilled,
    BellFilled,
    FolderOpenFilled
} from '@ant-design/icons';
import GroupsIcon from '@mui/icons-material/Groups';
import './SideBar.css';

const { SubMenu } = Menu;

const Sidebar: React.FC = () => {
    return (
        <div className="sidebar">
            <h3 className="sidebar-title">CHỦ ĐỀ BÀI VIẾT</h3>
            <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
            >
                <Menu.Item key="1" icon={<BulbFilled />} className="custom-menu-item">
                    Giới thiệu
                </Menu.Item>
                <Menu.Item key="2" icon={<NotificationFilled />}>
                    Tin tức
                </Menu.Item>
                <Menu.Item key="3" icon={<CalendarFilled />}>
                    Sự kiện
                </Menu.Item>
                <Menu.Item key="4" icon={<BellFilled />}>
                    Thông báo
                </Menu.Item>
                <Menu.Item key="5" icon={<FolderOpenFilled />}>
                    Tin cổ đông
                </Menu.Item>
                <Menu.Item key="6" icon={<GroupsIcon fontSize='large'/>}>
                    Hoạt động đoàn thể
                </Menu.Item>
            </Menu>
        </div>
    );
};

export default Sidebar;
