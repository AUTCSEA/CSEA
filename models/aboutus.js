import {Schema, model, models} from 'mongoose';

const aboutUsSchema = new Schema({

    title: {
        type: String,
    },
    description: {
        type: String,
    },
    image: {
        type: String,
    },
});

const AboutUs = models.AboutUs || model('AboutUs', aboutUsSchema);

export default AboutUs;