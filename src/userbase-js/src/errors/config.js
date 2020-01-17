import statusCodes from '../statusCodes'

class AppIdAlreadySet extends Error {
  constructor(appId, ...params) {
    super(appId, ...params)

    this.name = 'AppIdAlreadySet'
    this.message = 'Application ID already set.'
    this.status = statusCodes['Conflict']
    this.appId = appId
  }
}

class AppIdMustBeString extends Error {
  constructor(...params) {
    super(...params)

    this.name = 'AppIdMustBeString'
    this.message = 'Application ID must be a string.'
    this.status = statusCodes['Bad Request']
  }
}
class AppIdCannotBeBlank extends Error {
  constructor(...params) {
    super(...params)

    this.name = 'AppIdCannotBeBlank'
    this.message = 'Application ID cannot be blank.'
    this.status = statusCodes['Bad Request']
  }
}

class EndpointAlreadySet extends Error {
  constructor(endpoint, ...params) {
    super(endpoint, ...params)

    this.name = 'EndpointAlreadySet'
    this.message = 'Endpoint already set.'
    this.status = statusCodes['Conflict']
    this.endpoint = endpoint
  }
}

export default {
  AppIdAlreadySet,
  AppIdMustBeString,
  AppIdCannotBeBlank,
  EndpointAlreadySet,
}
