import { Card, Button } from 'antd';
const FeatureCard = ({ title, body }) => (
    <section >
        <div className='w-full h-72 hover:translate-y-1 hover:shadow-x1 rounded-x1 translation-all duration-300 '>
            <Card title={title} className='h-full'>
                <p>{body}</p>
                <Button type='primary'>Read More</Button>
            </Card>
        </div>
    </section>
);
export default FeatureCard;