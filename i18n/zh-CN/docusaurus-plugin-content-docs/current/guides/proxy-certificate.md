---
title: 代理证书安装
sidebar_position: 2
---

桌面 AdGuard 应用程序 (适用于 Windows 和 Mac 的 AdGuard) 可以用作代理。 这意味着您可以通过 AdGuard 路由其他设备的流量（全部或特定应用程序或浏览器的流量）。

> 请注意，这些设备必须与已安装 AdGuard 的 PC 或 Mac 位于同一网络中。

在任何情况下，HTTP 流量都会被过滤，但是要使 AdGuard 能够过滤 HTTPS 流量，您需要在连接的设备上手动安装 AdGuard 证书。

## 如何下载并安装证书

根据您设备的类型 (Android / iOS)，请遵守以下说明中的一条：

### 安卓系统 {#android}

1. 记下装有 AdGuard 的台式计算机的 IP 地址。

2. 在要通过 AdGuard 路由流量的设备上，打开主动 WiFi 网络的高级设置。

3. 将**代理类型**切换为**手动**。 对于**代理主机名**，请输入在第一步记下的 IP 地址。 对于**代理端口**，输入在桌面 AdGuard 的网络设置中选择的端口。

4. 在您的计算机上激活 AdGuard 并在桌面应用程序的**网络**设置中选中框**使用 AdGuard 作为 HTTP 代理** 。

5. 使用任何浏览器访问此链接：[http://local.adguard.org/cert](http://local.adguard.org/cert)

6. 单击**下载**按钮。

7. 证书下载后，需要安装它。 如果未自动打开，请点击下载的证书以打开文件。

8. 在某些手机上，可能会要求您输入设备密码。 然后再按**确定**。 证书安装成功。

### iOS 系统 {#ios}

1. 记下装有 AdGuard 的台式计算机的 IP 地址。

2. 在要通过 AdGuard 路由流量的设备上，打开主动 WiFi 网络的高级设置。

3. 将**代理类型**切换为**手动**。 对于**代理主机名**，请输入在第一步记下的 IP 地址。 对于**代理端口**，输入在桌面 AdGuard 的网络设置中选择的端口。

4. 在您的计算机上激活 AdGuard 并在桌面应用程序的**网络**设置中选中框**使用 AdGuard 作为 HTTP 代理** 。

5. 打开 Safari 浏览器，转到 [http://local.adguard.org/cert](http://local.adguard.org/cert) 并点击**下载**。 在打开的对话框中，允许网站下载配置文件。

6. 打开**设置** -> **配置文件下载**，然后点击右上角的**安装**。 输入密码并确认安装。 点击**完成**。

7. 转到**设置** -> **常规** -> **关于** -> **证书信任设置**。 启用 **Adguard Personal CA** 旁边的开关。 证书安装成功。