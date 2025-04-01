const base = {
    get() {
        return {
            url : "http://localhost:8080/ssmjntet/",
            name: "ssmjntet",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssmjntet/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "公务用车管理智慧云服务监管平台"
        } 
    }
}
export default base
