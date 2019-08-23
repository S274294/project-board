import {FuseUtils} from '@fuse';

class LabelModel {
    constructor(data)
    {
        const label = data ? data : {};

        this.id = label.id || FuseUtils.generateGUID();
        this.name = label.name || '';
        this.color = label.color || '#00ffff';
    }
}

export default LabelModel;