/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    swap(root);
    return root;
    
    function swap(node) {
        if (node !== null) {
            var tmp = node.left;
            node.left = node.right;
            node.right = tmp;
            swap(node.left);
            swap(node.right);
        }
    }
};
