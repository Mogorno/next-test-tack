import { nominals } from '@/entities/nominals';
import { AtmCalculator } from '@/widgets/atm';

const AtmPage = () => {
    const nominalsApi: { nominal: number; inStock: number }[] = nominals.map(
        (nominal) => ({
            nominal,
            inStock: Math.floor(Math.random() * 5),
        })
    );
    return (
        <div className="mt-24 mx-auto">
            <AtmCalculator nominalsApi={nominalsApi} />
        </div>
    );
};

export default AtmPage;
