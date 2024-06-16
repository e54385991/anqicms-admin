export default {
  'plugin.aigenerate.demand.required': '统一要求不能超过500个字符',
  'plugin.aigenerate.checking': '正在检查中',
  'plugin.aigenerate.setting': 'AI自动写作设置',
  'plugin.aigenerate.isopen': '是否自动写作',
  'plugin.aigenerate.isopen.no': '否',
  'plugin.aigenerate.isopen.yes': '自动按计划写作',
  'plugin.aigenerate.language': '写作文章语种',
  'plugin.aigenerate.double-title': '生成双标题',
  'plugin.aigenerate.double-title.description': '仅中文支持，标题生成格式：主标题(副标题)',
  'plugin.aigenerate.demand': '写作统一要求',
  'plugin.aigenerate.demand.description':
    '可以定义所有AI写作文章的统一要求，不超过200字符。 默认留空即可',
  'plugin.aigenerate.source': 'AI写作来源',
  'plugin.aigenerate.source.anqicms': '安企CMS官网',
  'plugin.aigenerate.source.openai': '自备OpenAIKey',
  'plugin.aigenerate.source.spark': '星火大模型',
  'plugin.aigenerate.source.description': '声明：仅有使用安企CMS搭建的海外网站可选自备OpenAIKey。',
  'plugin.aigenerate.source.check-openai': '检查OpenAI接口',
  'plugin.aigenerate.openai.description':
    'OpenAI Key 一般以 sk- 开头，可以添加多个key，程序会每次会随机选择一个key使用。',
  'plugin.aigenerate.openai.valid': '有效',
  'plugin.aigenerate.openai.invalid': '已失效',
  'plugin.aigenerate.enter-to-add': '按回车添加',
  'plugin.aigenerate.spark.description': '星火大模型API申请地址',
  'plugin.aigenerate.spark.version': '星火大模型版本',
  'plugin.aigenerate.default-category': '默认发布文章分类',
  'plugin.aigenerate.default-category.description':
    '如果关键词没设置分类，则采集到的文章默认会被归类到这个分类下,必须设置一个分类否则无法正常保存文章',
  'plugin.aigenerate.save-type': '文章处理方式',
  'plugin.aigenerate.save-type.draft': '存入草稿箱',
  'plugin.aigenerate.save-type.release': '正常发布',
  'plugin.aigenerate.start-time': '每天开始时间',
  'plugin.aigenerate.start-time.placeholder': '默认8点开始',
  'plugin.aigenerate.start-time.description': '请填写0-23的数字，0表示不限',
  'plugin.aigenerate.end-time': '每天结束时间',
  'plugin.aigenerate.end-time.placeholder': '默认22点结束',
  'plugin.aigenerate.end-time.description': '请填写0-23的数字，0表示不限',
  'plugin.aigenerate.daily-limit': '每日发布量',
  'plugin.aigenerate.daily-limit.description': '每日最大发布文章量，0表示不限',
  'plugin.aigenerate.insert-image': '文章图片处理',
  'plugin.aigenerate.insert-image.default': '默认',
  'plugin.aigenerate.insert-image.diy': '自定义插入图片',
  'plugin.aigenerate.insert-image.list': '供插入的图片列表',
  'plugin.aigenerate.replace': '内容替换',
  'plugin.aigenerate.replace.tips1': '编辑需要替换的关键词对，会在发布文章的时候自动执行替换。',
  'plugin.aigenerate.replace.tips2':
    '替换规则支持正则表达式，如果你对正则表达式熟悉，并且通过普通文本无法达成替换需求的，可以尝试使用正则表达式规则来完成替换。',
  'plugin.aigenerate.replace.tips3':
    '正则表达式规则为：由 { 开始，并以 } 结束，中间书写规则代码，如 {[0-9]+} 代表匹配连续的数字。',
  'plugin.aigenerate.replace.rules': '内置部分规则，可以快速使用，已内置的有：',
  'plugin.aigenerate.replace.rule.email': '{邮箱地址}',
  'plugin.aigenerate.replace.rule.date': '{日期}',
  'plugin.aigenerate.replace.rule.time': '{时间}',
  'plugin.aigenerate.replace.rule.cellphone': '{电话号码}',
  'plugin.aigenerate.replace.rule.qq': '{QQ号}',
  'plugin.aigenerate.replace.rule.wechat': '{微信号}',
  'plugin.aigenerate.replace.rule.website': '{网址}',
  'plugin.aigenerate.replace.notice':
    '注意：正则表达式规则书写不当很容易造成错误的替换效果，如微信号规则，会同时影响到邮箱地址、网址的完整性。请谨慎使用。',
  'plugin.aigenerate.replace.to': '替换为',
  'plugin.aigenerate.empty': '空',
  'plugin.aigenerate.start': '手动开始AI写作',
  'plugin.aigenerate.start.confirm': '确定要开始AI写作吗？',
  'plugin.aigenerate.start.description': '这将马上开始执行一次AI写作任务操作',
  'plugin.aigenerate.type': '类型',
  'plugin.aigenerate.type.undefine': '未定义',
  'plugin.aigenerate.type.generate': 'AI生成',
  'plugin.aigenerate.type.translate': '翻译',
  'plugin.aigenerate.type.pseudo': 'AI改写',
  'plugin.aigenerate.type.media': '自媒体改写',
  'plugin.aigenerate.status': '状态',
  'plugin.aigenerate.waiting': '未处理',
  'plugin.aigenerate.doing': '进行中',
  'plugin.aigenerate.finish': '已完成',
  'plugin.aigenerate.error': '出错',
  'plugin.aigenerate.time': '时间',
  'plugin.aigenerate.tips1': 'AI自动写作，会调用AI写作接口写作，需要付费。',
  'plugin.aigenerate.tips2':
    'AI自动写作会自动调用关键词库中的关键词来完成写作，每一个关键词写作一篇文章。请保证关键词库中的文章数量足够。',
  'plugin.aigenerate.tips3':
    'AI自动写作和文章采集功能共用关键词库，关键词已采集过文章的话，不再用来AI写作。',
  'plugin.aigenerate.tips4': '生成的文章会自动进入到内容管理里。',
  'plugin.anchor.edit': '编辑锚文本',
  'plugin.anchor.new': '添加锚文本',
  'plugin.anchor.title': '锚文本名称',
  'plugin.anchor.title.placeholder': '搜索锚文本或锚文本链接',
  'plugin.anchor.link': '锚文本链接',
  'plugin.anchor.link.description':
    '支持相对链接和绝对连接，如：/a/123.html 或 https://www.anqicms.com/',
  'plugin.anchor.weight': '锚文本权重',
  'plugin.anchor.weight.description': '请输入数字，0-9，数字越大，权重越高，高权重拥有优先替换权',
  'plugin.anchor.import': '导入锚文本',
  'plugin.anchor.import.description': '说明：只支持csv格式的文件上传并导入',
  'plugin.anchor.step1': '第一步',
  'plugin.anchor.step2': '第二步',
  'plugin.anchor.step1.download': '下载csv模板文件',
  'plugin.anchor.step2.upload': '上传csv文件',
  'plugin.anchor.setting': '锚文本设置',
  'plugin.anchor.density': '锚文本密度',
  'plugin.anchor.density.description': '例如：每100字替换一个锚文本，就填写100，默认100',
  'plugin.anchor.replace-way': '替换方式',
  'plugin.anchor.replace-way.auto': '自动替换',
  'plugin.anchor.replace-way.manual': '手动替换',
  'plugin.anchor.replace-way.description': '内容替换锚文本的方式',
  'plugin.anchor.extract': '提取方式',
  'plugin.anchor.extract.auto': '自动提取',
  'plugin.anchor.extract.manual': '手动提取',
  'plugin.anchor.extract.description': '选择从内容的关键词标签里提取锚文本关键词的方式',
  'plugin.anchor.delete.confirm': '确定要删除选中的锚文本吗？',
  'plugin.anchor.batch-update': '批量更新锚文本',
  'plugin.anchor.export': '导出锚文本',
  'plugin.anchor.replace': '替换',
  'plugin.anchor.replace-count': '替换次数',
  'plugin.backup.confirm': '确定要执行数据库备份吗？',
  'plugin.backup.backuping': '正在执行数据备份操作，请稍候。。',
  'plugin.backup.restore': '恢复',
  'plugin.backup.restore.confirm': '确定要用当前备份执行恢复吗？',
  'plugin.backup.restore.content': '恢复后，将会用当前的备份数据替换现有数据。请谨慎操作。',
  'plugin.backup.restoring': '正在执行数据恢复操作，请稍候。。',
  'plugin.backup.delete.confirm': '确定要删除该条数据吗？',
  'plugin.backup.download': '下载',
  'plugin.backup.download.confirm': '确定要下载到本地吗？',
  'plugin.backup.cleanup.confirm': '确定要清空网站数据吗？',
  'plugin.backup.cleaning': '正在执行清理操作，请稍候。。',
  'plugin.backup.cleanup.tips1':
    '该操作会删除全部文章。为了安全起见，请你务必先执行备份，以防不备之需。',
  'plugin.backup.cleanup.tips2': '默认不清理Uploads文件夹，如需清理，请勾选。',
  'plugin.backup.cleanup.upload.false': '不清理图片',
  'plugin.backup.cleanup.upload.true': '清理上传的图片',
  'plugin.backup.time': '备份时间',
  'plugin.backup.name': '备份名称',
  'plugin.backup.size': '备份大小',
  'plugin.backup.new': '新增备份',
  'plugin.backup.import': '导入本地备份',
  'plugin.backup.cleanup': '清空网站数据',
  'plugin.backup.tips':
    '说明：如果备份文件过大，需要下载备份文件，请使用FTP工具等下载备份文件，备份文件在网站根目录/data/backup/ 目录下。',
  'plugin.collector.setting': '采集和AI改写设置',
  'plugin.collector.auto-collect': '是否自动采集',
  'plugin.collector.auto-collect.yes': '自动按计划采集',
  'plugin.collector.auto-collect.no': '否',
  'plugin.collector.language': '采集文章语种',
  'plugin.collector.mode': '采集模式',
  'plugin.collector.mode.article': '文章采集',
  'plugin.collector.mode.ask': '问答组合',
  'plugin.collector.mode.description':
    '文章采集模式，会按原文采集整篇文章；问答组合模式，会从搜索问答列表中采集并组合成文章。',
  'plugin.collector.source': '自定义来源',
  'plugin.collector.source.description':
    "文章采集可用，注意自定义来源格式必须是一个搜索列表，搜索的关键词用 %s 表示，如搜索链接是：https://cn.bing.com/search?q=安企CMS ，则将 '安企CMS' 替换为 '%s' 后为：https://cn.bing.com/search?q=%s",
  'plugin.collector.category.description':
    '如果关键词没设置分类，则采集到的文章默认会被归类到这个分类下,',
  'plugin.collector.category.notice': '必须设置一个分类否则无法正常采集',
  'plugin.collector.min-title': '标题最少字数',
  'plugin.collector.min-title.placeholder': '默认10个字',
  'plugin.collector.min-title.description': '采集文章的时候，标题字数少于指定的字数，则不会采集',
  'plugin.collector.min-content': '内容最少字数',
  'plugin.collector.min-content.placeholder': '默认400个字',
  'plugin.collector.min-content.description':
    '采集文章的时候，文章内容字数少于指定的字数，则不会采集',
  'plugin.collector.pseudo': '是否AI改写',
  'plugin.collector.pseudo.no': '否',
  'plugin.collector.pseudo.yes': '进行AI改写',
  'plugin.collector.pseudo.description': 'AI改写只支持文章采集和问答组合。需要付费。',
  'plugin.collector.translate': '是否翻译',
  'plugin.collector.translate.no': '否',
  'plugin.collector.translate.yes': '进行翻译',
  'plugin.collector.translate.description':
    '翻译需要付费。注意：AI改写和翻译不能同时启用，否则结果会出错',
  'plugin.collector.to-language': '翻译目标语言',
  'plugin.collector.to-language.description': '选择自动翻译后有效',
  'plugin.collector.daily-limit': '每日采集数量',
  'plugin.collector.daily-limit.description': '每日最大采集文章量，0表示不限',
  'plugin.collector.insert-image': '采集图片处理',
  'plugin.collector.insert-image.remove': '移除图片',
  'plugin.collector.insert-image.contain': '保留原图片',
  'plugin.collector.insert-image.insert': '保留原图片',
  'plugin.collector.title-exclude': '标题排除词',
  'plugin.collector.title-exclude.tips': '采集文章的时候，标题出现这些关键词，则不会采集',
  'plugin.collector.title-prefix': '标题开头排除词',
  'plugin.collector.title-prefix.tips': '采集文章的时候，标题开头出现这些关键词，则不会采集',
  'plugin.collector.title-suffix': '标题结尾排除词',
  'plugin.collector.title-suffix.tips': '采集文章的时候，标题结尾出现这些关键词，则不会采集',
  'plugin.collector.content-exclude-line': '内容忽略行',
  'plugin.collector.content-exclude-line.tips':
    '采集文章的时候，内容出现这些词的那一行，将会被移除',
  'plugin.collector.content-exclude': '内容排除',
  'plugin.collector.content-exclude.tips': '采集文章的时候，内容出现这些词，则整篇文章都丢弃',
  'plugin.collector.link-exclude': '链接忽略',
  'plugin.collector.link-exclude.tips': '采集文章的时候，链接出现这些关键词的，则不会采集',
  'plugin.collector.start': '手动开始采集',
  'plugin.collector.start.confirm': '确定要开始采集吗？',
  'plugin.collector.start.content': '这将马上开始执行一次采集任务操作',
  'plugin.collector.tips':
    '采集文章需要先设置核心关键词，请检查“关键词库管理”功能，并添加相应的关键词。',
  'plugin.collector.replace': '批量替换关键词',
  'plugin.comment.new': '添加评论',
  'plugin.comment.edit': '编辑评论',
  'plugin.comment.item-title': '文档标题',
  'plugin.comment.time': '评论时间',
  'plugin.comment.ip': '评论IP',
  'plugin.comment.parent': '上级评论',
  'plugin.comment.user-id': '用户ID',
  'plugin.comment.user-name': '用户名',
  'plugin.comment.content': '评论内容',
  'plugin.comment.new-status': '请选择新的状态',
  'plugin.comment.batch-update-status': '批量更新状态',
  'plugin.comment.view-edit': '查看/编辑',
  'plugin.comment.delete.confirm': '确定要删除选中的评论吗？',
  'plugin.fileupload.delete.confirm': '确定要删除选中的文件吗？',
  'plugin.fileupload.upload.name': '上传新文件',
  'plugin.fileupload.upload.support': '说明：只允许上传 txt/htm/html/xml 格式的验证文件',
  'plugin.fileupload.upload.btn': '上传文件',
  'plugin.fileupload.view': '查看',
  'plugin.fileupload.create-time': '上传时间',
  'plugin.finance.commission': '佣金管理',
  'plugin.finance.withdraw': '手动提现',
  'plugin.finance.time': '时间',
  'plugin.finance.amount': '金额',
  'plugin.finance.after-amount': '变化后金额',
  'plugin.finance.status.unwithdraw': '未提现',
  'plugin.finance.status.withdraw': '已提现',
  'plugin.finance.withdraw.confirm': '确定要手动处理提现吗？',
  'plugin.finance.withdraw.confirm.content': '这里仅仅是相当于从用户侧申请提现。',
  'plugin.finance.order-id': '订单ID',
  'plugin.finance.direction': '资金方向',
  'plugin.finance.direction.in': '进账',
  'plugin.finance.direction.out': '出账',
  'plugin.finance.flow': '收支记录',
  'plugin.finance.type': '资金类型',
  'plugin.finance.type.sale': '出售',
  'plugin.finance.type.buy': '购买',
  'plugin.finance.type.refund': '退款',
  'plugin.finance.type.charge': '充值',
  'plugin.finance.type.withdraw': '提现',
  'plugin.finance.type.spread': '推广',
  'plugin.finance.type.cashback': '返现',
  'plugin.finance.type.commission': '佣金',
  'plugin.finance.withdraw.finish.confirm': '确定要手动处理完成提现吗？',
  'plugin.finance.withdraw.finish.content': '如果你线下打款给用户了，可以在这里点击完成',
  'plugin.finance.withdraw.amount': '提现金额',
  'plugin.finance.withdraw.status.waiting': '等待处理',
  'plugin.finance.withdraw.status.agree': '已同意',
  'plugin.finance.withdraw.status.finish': '已提现',
  'plugin.finance.withdraw.apply-time': '申请时间',
  'plugin.finance.withdraw.success-time': '成功时间',
  'plugin.finance.withdraw.agree': '同意提现',
  'plugin.finance.withdraw.finish': '完成提现',
  'plugin.finance.withdraw.name': '提现管理',
  'plugin.finance.withdraw.apply': '提现申请',
};
