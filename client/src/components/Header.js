import React from 'react';
import { PageHeader, Button, Descriptions } from 'antd';
import { connect } from 'react-redux';

class Header extends React.Component {

    renderContent = () => {
        switch(this.props.auth) {
            case null:
                return <Button size='large' type="primary" loading>Please Wait...</Button>
            case false:
                return <a href="auth/google"><Button size='large' type="primary">Login with Google</Button></a>
            default:
                return <a href="api/logout"><Button size='large' type="primary">Logout</Button></a>
        }
    }

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
            extra={ this.renderContent() }
            >
                <Descriptions size="small" column={3}>
                    <Descriptions.Item label="Author">Dan</Descriptions.Item>
                </Descriptions>
            </PageHeader>
    </div>
        )
    }
}

function mapStateToProps ({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(Header);