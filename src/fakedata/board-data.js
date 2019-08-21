const boardData = {
    tasks: {
        "task-1": {
            id: "task-1",
            title: "逛商场",
            description: "用心的去逛商场",
            finish: true,
            cover: "https://demonthemes.com/wp-content/uploads/2019/05/creative-tim-dashboard.jpg",
            labels: [
                { id: "label1", name: "哈哈", color: "red" },
                { id: "label2", name: "嘻嘻", color: "yellow" },
                { id: "label3", name: "么么", color: "green" }
            ],
            members: [
                { username: "harry", avatar: "https://material-ui.com/static/images/avatar/1.jpg" },
                { username: "iris", avatar: "https://material-ui.com/static/images/avatar/1.jpg" }
            ],
            attachments: [
                {
                    nodeRef: "123456",
                    preview: "https://demonthemes.com/wp-content/uploads/2019/05/creative-tim-dashboard.jpg",
                    addDate: "12345676",
                    cover: false
                }
            ],
            checkList: {
                progress: 5,
                total:
                    [{ id: "checklist1", content: "实现一个日历库", finish: false },
                    { id: "checklist2", content: "替换事件颜色用material design", finish: false },
                    { id: "checklist3", content: "使用moment.js", finish: false }
                    ]
            },
            priority: 1,
            startTime: 1565930800739,
            dueTime: 1565930800731,
            activity: {
                comments: ["好", "很好", "非常好"]
            },
            createTime: 1565930800731,
            updateTime: 1565930800731
        },
        "task-2": {
            id: "task-2",
            title: "玩游戏",
            description: "用心的去玩游戏",
            finish: false,
            cover: "https://demonthemes.com/wp-content/uploads/2019/05/creative-tim-dashboard.jpg",
            labels: [
                { id: "label1", name: "哈哈", color: "red" },
                { id: "label2", name: "嘻嘻", color: "yellow" },
                { id: "label3", name: "么么", color: "green" }
            ],
            members: [
                { username: "harry", avatar: "https://material-ui.com/static/images/avatar/1.jpg" },
                { username: "iris", avatar: "https://material-ui.com/static/images/avatar/1.jpg" }
            ],
            attachments: [
                {
                    nodeRef: "123456",
                    preview: "https://demonthemes.com/wp-content/uploads/2019/05/creative-tim-dashboard.jpg",
                    addDate: "12345676"
                }
            ],
            checkList: {
                progress: 5,
                total: [
                    { id: "checklist1", content: "实现一个日历库", finish: false },
                    { id: "checklist2", content: "替换事件颜色用material design", finish: false },
                    { id: "checklist3", content: "使用moment.js", finish: false }
                ]
            },
            priority: 2,
            startTime: 1565930800737,
            dueTime: 1565930800732,
            activity: {
                comments: ["好", "很好", "非常好"]
            },
            createTime: 1565930800732,
            updateTime: 1565930800732
        },
        "task-3": {
            id: "task-3",
            title: "给手机充电",
            description: "用心的去给手机充电",
            finish: false,
            labels: [
                { id: "label1", name: "哈哈", color: "red" },
                { id: "label2", name: "嘻嘻", color: "yellow" },
                { id: "label3", name: "么么", color: "green" }
            ],
            cover: "https://demonthemes.com/wp-content/uploads/2019/05/creative-tim-dashboard.jpg",
            members: [
                { username: "harry", avatar: "https://material-ui.com/static/images/avatar/1.jpg" },
                { username: "iris", avatar: "https://material-ui.com/static/images/avatar/1.jpg" }
            ],
            attachments: [
                {
                    nodeRef: "123456",
                    preview: "https://demonthemes.com/wp-content/uploads/2019/05/creative-tim-dashboard.jpg",
                    addDate: "12345676"
                }
            ],
            checkList: {
                progress: 5, total: [
                    { id: "checklist1", content: "实现一个日历库", finish: false },
                    { id: "checklist2", content: "替换事件颜色用material design", finish: false },
                    { id: "checklist3", content: "使用moment.js", finish: false }
                ]
            },
            priority: 3,
            startTime: 1565930800736,
            dueTime: 1565930800733,
            activity: {
                comments: ["好", "很好", "非常好"]
            },
            createTime: 1565930800733,
            updateTime: 1565930800733
        },
    },
    columns: {
        "column-1": {
            id: "column-1",
            title: "待办任务",
            taskIds: ["task-1", "task-2", "task-3"],
        },
        "column-2": {
            id: "column-2",
            title: "正在处理",
            taskIds: [],
        },
        "column-3": {
            id: "column-3",
            title: "已完成",
            taskIds: [],
        }
    },
    columnOrder: ["column-1", "column-2", "column-3"],

}

export default boardData;
