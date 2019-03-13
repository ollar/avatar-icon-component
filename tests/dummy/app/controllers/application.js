import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
    userData: computed(() => ({
        username: 'John Doe'
    })),

    imageModel: computed(() => ({
        url: '//joeschmoe.io/api/v1/random'
    })),
});
