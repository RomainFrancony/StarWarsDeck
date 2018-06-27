const state = {
    resources: [],
};

// getters
const getters = {
    getResources: state => state.resources,
};

// actions
const actions = {

    putEvent(context, event) {
        return new Promise((resolve, reject) => {
            Vue.http.put(`event/${ event.id_event }`, { event : event}, {
                headers: {
                    'x-access-token': store.getters.getApiKey,
                    'Content-Type': "application/json"
                },
            }).then((response) => {
                console.log(response)
                resolve(response.body);
            }, (response) => {
                reject();
            })
        });
    }
};

// mutations
const mutations = {
    addEvents(state, events) {
        state.events = events;
    },
    deleteEvent(state, event) {
        state.events.splice(state.events.indexOf(event), 1);
    },
    setCurrentEvent(state,event) {
        state.currentEvent = event;
    },
    setEventRequests(state,eventRequests) {
        state.eventRequests = eventRequests;
    },
};

export default {
    state,
    getters,
    actions,
    mutations
}