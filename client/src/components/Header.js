import React from 'react';
import { PageHeader, Button, Descriptions } from 'antd';

class Header extends React.Component {
    render() {
        return (
        <div className="site-page-header-ghost-wrapper">
            <PageHeader
            ghost={false}
            onBack={() => window.history.back()}
            title="FullStack E-Mail App"
            subTitle="Created with NodeJS, ReactJS, React Router and Redux"
            style={{
                backgroundColor: '#7F78D2',
                padding: '24px'
            }}
            extra={[
                <Button key="1" type="primary">
                Login With Google
                </Button>
            ]}
            >
                <Descriptions size="small" column={3}>
                    <Descriptions.Item label="Author">Dan</Descriptions.Item>
                </Descriptions>
            </PageHeader>
    </div>
        )
    }
}

export default Header;