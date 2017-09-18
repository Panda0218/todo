## 步骤
### 1.生成项目
```
npm install create-react-app -g
create-react-app todo
cd todo
yarn start
```
### 2.提交到github
```
new repository
cd todo
git init
git add -A
git commit -m"初始化项目"
git remote add origin 仓库地址
git push -u origin master
```
### 3.实现功能
1）引入bootstrap，编写TodoHeader组件
2）编写待办事项列表TodoItem组件
3）添加待办事项功能
4）切换待办事项的状态
5）删除待办事项
6）全选/取消全选
7) 编写TodoFooter组件
8) 实现状态过滤功能
9) 删除已完成的事项
10)数据存储到localStorage