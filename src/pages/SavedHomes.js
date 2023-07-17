import React from 'react';
import { Content } from 'antd/es/layout/layout';
import Form from 'antd/es/form/Form';
import { Input, Button } from 'antd';
import FormItem from 'antd/es/form/FormItem';

const onReset = () => {
    document.getElementById('filterForm').reset();
}

function SavedHomes() {
    return (
        <Content>
            <Form id='filterForm' layout='inline' style={{ marginLeft: '2%', marginTop: '1%' }}>
                <FormItem name='city'>City <Input /></FormItem>
                <FormItem name='state'>State <Input /></FormItem>
                <FormItem name='price'>Price <Input /></FormItem>
                <FormItem name='bed'>Bed <Input /></FormItem>
                <FormItem name='bath'>Bath <Input /></FormItem>
                <FormItem name='sqft'>Sqft <Input /></FormItem>
                <Button type='primary' style={{ marginTop: '1.25%', marginRight: '1%' }}>Filter</Button>
                <Button type='default' onClick={onReset} style={{ marginTop: '1.25%' }}>Clear</Button>
            </Form>
        </Content>
    )
}

export default SavedHomes
