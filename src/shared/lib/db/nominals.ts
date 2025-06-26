import mock from '@/shared/mock';
import { NominalsInStock } from '@/entities/nominals';

const nominals = {
    async getAll(): Promise<NominalsInStock> {
        return mock.nominals;
    },
};

export default nominals;
