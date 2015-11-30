module.exports = {
    setGender: function(i){
		if(i==1)
			return {type: 'SET_FEMALE'};
		else
			return {type: 'SET_MALE'};
    }
};