import {
  Request,
  RequestOptions,
  Response,
  RESTDataSource
} from 'apollo-datasource-rest'
import { UserInputError } from 'apollo-server'
import logger from '@{{global_computed_inputs.shell_project_name}}/shared/utils/logger'

const REGEX_TO_PARSE_BACKEND_VALIDATION_MESSAGE = /(.+?): (.+)/

type ValidationError = {
  description: string
  details?: string[]
}

class Api extends RESTDataSource {
  constructor() {
    super()
  }

  willSendRequest(request: RequestOptions) {
    logger.info({
      from: '[API_REQUEST]',
      requestId: this.context['request_id'],
      endpoint: `${this.baseURL}/${request.path}`,
      method: request.method,
      params: request.params
    })
  }
}

export default Api
