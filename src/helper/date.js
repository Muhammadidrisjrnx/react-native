let moment = require('moment');

export let convertDate = (date,format) => {
    if(!format) format = 'DD MMMM YYYY'
    return moment(date).format(format)
}
