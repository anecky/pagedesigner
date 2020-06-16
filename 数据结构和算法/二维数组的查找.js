/*题目描述：n*m的二维数组中，每一行都按照从左到右递增的顺序排序，
每一列都按照从上到下递增的顺序排列，请完成一个函数，输入这样的一个
二维数组和一个整数，判断数组中是否含有该整数。
[
    [1,4,7,11,15],
    [2,5,8,12,19],
    [3,6,9,16,22],
    [10,13,14,17,24],
    [18,21,23,26,30]
]
*/
function Find(target, array)
{
    for(let i=array.length-1;i>=0;i--)
    {
        for(let j=0;j<array.length;j++)
        {
            if(array[i][j] == target) return true
            if(array[i][j] < target) continue;
            if(array[i][j] > target) break;
        }
    }
    return false
}
module.exports = {
    Find : Find
};