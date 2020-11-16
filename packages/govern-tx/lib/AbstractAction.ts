export default abstract class AbstractAction {
    /**
     * The parameters used to create the transaction
     * 
     * @var {Object} parameters
     */
    private parameters: any;

    /**
     * @param {Object} parameters 
     * 
     * @constructor
     */
    constructor(parameters: any) {
        this.parameters = this.validateParameters(parameters);
     }

     /**
      * Validates the given parameters.
      * 
      * @method validateParameters 
      * 
      * @param {Object} parameters 
      * 
      * @returns {Object}
      * 
      * @protected
      */
    protected validateParameters(parameters: any): any {
        return parameters;
    }

    /**
     * Executes the actual action
     * 
     * @method execute
     * 
     * @returns {Promise<any>} 
     * 
     * @public
     */
    public abstract execute(): Promise<any>
}