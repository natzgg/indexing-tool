import React from 'react';

const AudacityCapital = ({ fill = '#CD833F', width = 121, height = 121 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 121 121" fill="none">
    <g clipPath="url(#clip0_18_132)">
      <path xmlns="http://www.w3.org/2000/svg" d="M72.9834 61.0064C69.262 61.0064 65.5405 61.0064 61.8191 61.0064C60.633 61.0064 60.5677 61.05 60.5351 62.2719C60.5025 63.2537 60.5351 64.2246 60.5242 65.2065C60.5242 69.6902 60.5024 74.1629 60.4916 78.6466C60.4916 79.8248 60.5351 79.8685 61.6668 79.9012C64.3 79.9776 66.0628 81.3739 67.2707 83.6103C67.7386 84.4613 67.7494 84.4285 68.435 83.774C69.8278 82.454 71.1336 81.003 73.0378 80.3703C76.1825 79.323 81.0356 79.5521 83.3969 83.3594C84.2238 84.6904 84.4632 86.1958 84.4632 87.7231C84.4632 90.385 83.6363 92.7196 81.547 94.5087C80.3936 95.5014 79.0008 96.036 77.5971 96.5269C75.6167 97.2251 73.571 97.7487 71.6667 98.6651C69.3599 99.7888 67.9453 101.491 67.9997 104.218C68.0432 106.094 67.9127 107.971 68.3588 109.825C68.6961 111.243 69.2511 112.542 70.3827 113.458C73.114 115.673 76.4437 114.647 77.5753 111.309C77.88 110.403 78.2064 109.52 78.5982 108.647C79.0008 107.763 79.6646 107.294 80.6112 107.207C81.6341 107.098 82.4175 107.567 82.9725 108.374C83.8974 109.694 83.7233 111.363 82.6678 112.585C81.5144 113.916 79.9475 114.494 78.337 114.931C74.398 116 70.5677 115.64 66.8572 113.905C64.2239 112.673 62.8855 110.6 62.7767 107.709C62.744 106.814 62.7005 105.909 62.6896 105.003C62.6896 104.502 62.4829 104.294 61.9823 104.349C60.8289 104.502 59.6755 104.392 58.522 104.262C57.9453 104.196 57.7168 104.392 57.7277 104.96C57.7277 106.04 57.6406 107.12 57.5754 108.2C57.423 110.633 56.237 112.389 54.1804 113.545C50.6983 115.487 46.966 115.967 43.0814 115.171C41.3621 114.822 39.7081 114.298 38.3045 113.163C36.8463 111.974 36.4546 110.229 37.3034 108.603C37.8148 107.643 38.62 107.207 39.6864 107.218C40.731 107.218 41.4383 107.763 41.8191 108.702C42.1891 109.607 42.4938 110.534 42.8529 111.44C43.5493 113.207 44.6918 114.505 46.7049 114.636C48.9138 114.767 50.3719 113.556 51.3839 111.713C51.9279 110.709 52.1347 109.585 52.3088 108.462C52.559 106.88 52.5264 105.276 52.4067 103.683C52.2326 101.305 50.8942 99.7124 48.7832 98.7087C46.879 97.8033 44.8442 97.236 42.8529 96.5705C41.0139 95.9487 39.2511 95.185 37.9562 93.6468C36.1826 91.5523 35.6929 89.1086 36.0085 86.4358C36.4981 82.203 39.817 79.9557 43.6472 79.8576C46.7266 79.7812 49.2185 80.9267 51.3186 83.1413C52.5482 84.4504 52.6352 84.4504 53.5384 82.9667C54.8115 80.8721 56.6613 79.923 59.0443 79.9121C59.6319 79.9121 59.8713 79.6939 59.8713 79.0939C59.8713 73.3557 59.8713 67.6174 59.8931 61.8791C59.8931 61.2464 59.6428 61.0282 59.0226 61.0173C55.1706 60.941 51.3295 60.9846 47.4774 60.9628C44.3436 60.9519 41.2098 60.9628 38.0868 60.9191C37.8039 60.9191 37.521 60.9191 37.2381 60.9191C36.0774 60.9191 35.4572 61.4973 35.3774 62.6537C35.2141 65.021 33.9845 66.6792 31.9715 67.8138C31.0357 68.3483 31.003 68.512 31.7865 69.2538C33.3643 70.7593 34.8224 72.3738 35.2577 74.5993C35.8561 77.5885 35.7691 80.5012 33.756 83.0431C32.5264 84.5922 30.8398 85.334 28.9574 85.5304C24.3872 86.0322 20.9269 83.6649 19.4906 79.2685C18.7397 76.9557 18.1304 74.5775 17.064 72.3629C15.9541 70.0611 14.2022 68.8174 11.6124 68.7956C9.47969 68.7738 7.35783 68.7956 5.31213 69.5374C3.19026 70.312 1.85185 71.7956 1.60158 74.032C1.43836 75.4612 1.97155 76.7702 3.15762 77.7084C4.01725 78.3957 5.01833 78.7776 6.05206 79.1048C6.61789 79.2903 7.16196 79.4867 7.67339 79.803C8.64183 80.3921 9.02268 81.243 8.8921 82.3449C8.7724 83.3703 8.14128 84.0358 7.27078 84.4395C5.64945 85.1922 3.94108 84.6467 2.90734 83.0976C1.55805 81.0685 0.992223 78.7666 0.774596 76.3993C0.480799 73.2138 1.05751 70.1374 2.48297 67.2574C3.71257 64.781 5.71474 63.4719 8.52213 63.4828C9.33824 63.4828 10.1652 63.4064 10.9813 63.3737C11.4275 63.3519 11.6233 63.1773 11.558 62.6973C11.3948 61.541 11.4275 60.3955 11.6124 59.2391C11.743 58.3773 11.6124 58.2682 10.7311 58.2355C9.7082 58.2027 8.67447 58.1918 7.65162 58.1373C5.29037 57.9955 3.57111 56.7845 2.51562 54.7227C0.0455438 49.9444 -0.128558 45.0244 1.85185 40.0388C2.4068 38.6425 3.29907 37.4861 4.84423 37.0279C6.06294 36.6679 7.56457 37.2679 8.2501 38.3916C8.82681 39.3516 8.68535 40.7479 7.89101 41.5334C7.39047 42.0352 6.73759 42.2752 6.07382 42.5043C5.02921 42.8643 3.9846 43.2462 3.09233 43.9116C0.393748 45.9189 1.10104 50.0972 4.06077 51.7117C4.93128 52.1808 5.84532 52.5081 6.81376 52.6608C8.75064 52.9663 10.7093 52.9881 12.6462 52.7372C14.8877 52.4536 16.1826 50.9263 17.0422 48.9517C17.9236 46.9226 18.4459 44.7626 19.1315 42.668C19.4906 41.5661 19.9149 40.497 20.5352 39.5043C22.4612 36.4279 26.2044 35.3697 29.3491 35.9806C33.9845 36.8752 35.7038 41.1298 35.323 45.2207C35.0618 48.0353 33.6472 50.1844 31.7103 52.0936C30.8834 52.9118 30.8942 53.0208 31.9171 53.5663C34.2566 54.81 35.3774 56.7845 35.3882 59.3918C35.3882 60.09 35.6929 60.2864 36.3132 60.2755C38.6962 60.2755 41.0901 60.2755 43.4731 60.2755C48.4568 60.2973 53.4296 60.33 58.4132 60.3519C59.8713 60.3519 59.8931 60.33 59.904 58.9227C59.9366 53.8827 59.9693 48.8426 60.0019 43.7916C60.0019 43.5625 60.0019 43.3334 60.0019 43.0934C59.991 42.3734 59.7299 41.9916 58.892 42.0025C56.4111 42.0243 54.5939 40.8789 53.3969 38.6861C52.7332 37.4643 52.6679 37.4752 51.6885 38.5006C50.4589 39.7879 49.1532 40.9989 47.423 41.5771C44.2892 42.6025 41.2859 42.4498 38.5982 40.3552C36.3784 38.6206 35.867 36.1661 36.0302 33.5042C36.3349 28.5187 39.4688 26.5659 42.8202 25.4423C45.1271 24.6677 47.5101 24.0895 49.632 22.8241C51.2315 21.875 52.2544 20.4786 52.3958 18.6131C52.6026 16.0385 52.657 13.4639 51.7103 10.9875C50.9921 9.10025 49.8061 7.68204 47.6733 7.40931C45.0074 7.06022 43.5819 8.76206 42.8964 10.5621C42.5808 11.4021 42.3306 12.2748 41.9715 13.093C41.4056 14.3912 40.3393 15.0021 39.175 14.784C37.9889 14.5549 37.064 13.453 36.9225 12.1548C36.7049 10.1803 37.8257 8.98024 39.3599 8.14023C42.0476 6.66749 44.9856 6.28566 48.0106 6.52567C49.6646 6.65658 51.2315 7.10386 52.7767 7.69295C55.9105 8.89297 57.608 11.1294 57.7059 14.5221C57.7277 15.3185 57.7495 16.1149 57.7495 16.9113C57.7495 17.3913 57.9453 17.6095 58.4459 17.5985C59.6755 17.5549 60.9051 17.5331 62.1347 17.6967C62.559 17.7513 62.6787 17.5113 62.6896 17.1513C62.7223 16.3767 62.7767 15.6131 62.7875 14.8385C62.8202 10.6494 64.8006 8.71842 68.337 7.43113C69.5122 7.00567 70.7309 6.72203 71.9932 6.53657C75.2032 6.06748 78.25 6.64567 81.1009 8.07478C82.6243 8.83842 83.7342 10.0712 83.5927 11.9912C83.4404 14.0421 81.5797 15.2312 79.7516 14.4785C78.9899 14.1621 78.6743 13.4749 78.3914 12.7876C78.0759 12.0239 77.8365 11.2385 77.5536 10.4748C76.966 8.88206 75.9431 7.68204 74.2021 7.40931C72.2217 7.10386 70.633 7.87841 69.4796 9.50389C68.6308 10.693 68.3262 12.0894 68.1521 13.4858C67.9344 15.2749 67.9127 17.0858 68.1521 18.8749C68.4567 21.1659 69.991 22.4859 71.9497 23.3695C73.8648 24.2423 75.8887 24.8314 77.8909 25.475C80.9377 26.4568 83.288 28.1587 84.1477 31.3769C84.8114 33.8533 84.7897 36.3297 83.386 38.6097C82.2434 40.4752 80.5568 41.4898 78.4132 41.8825C75.9649 42.3298 73.6689 42.0461 71.5253 40.7479C70.3283 40.017 69.3817 38.9916 68.3914 38.0315C67.9127 37.5734 67.695 37.6279 67.3904 38.1843C66.5851 39.6788 65.584 40.9989 63.9083 41.6207C63.2228 41.8716 62.5155 41.9589 61.7973 41.9916C60.633 42.0461 60.633 42.0352 60.633 43.2353C60.633 47.9699 60.633 52.7045 60.633 57.4391C60.633 57.9736 60.5895 58.5191 60.6113 59.0537C60.6657 60.33 60.6766 60.33 61.9279 60.33C66.9333 60.33 71.9388 60.33 76.9442 60.3409C79.4143 60.3409 81.8735 60.3519 84.3435 60.3519C85.3882 60.3519 85.4426 60.3082 85.4317 59.2718C85.399 56.8609 86.3675 55.0172 88.4241 53.7299C89.7625 52.9008 89.7516 52.8463 88.6417 51.7445C87.3686 50.4681 86.1172 49.159 85.5731 47.3699C84.6482 44.3262 84.6917 41.337 86.5307 38.6425C88.1411 36.2752 90.5894 35.5442 93.3424 35.6861C97.2815 35.8933 99.6754 38.097 101.003 41.6861C101.841 43.9553 102.439 46.3008 103.484 48.4935C104.202 49.999 105.17 51.2645 106.792 51.8645C107.771 52.2354 108.827 52.2572 109.828 52.2463C111.743 52.2245 113.658 52.0608 115.497 51.3845C118.239 50.3808 119.719 47.4462 118.718 44.8826C118.13 43.3771 116.868 42.6789 115.464 42.1552C114.844 41.9261 114.202 41.7298 113.582 41.4898C111.906 40.8352 111.177 39.297 111.852 37.8788C112.592 36.3297 114.561 35.6752 116.052 36.4715C117.368 37.1806 118.141 38.337 118.663 39.6898C120.426 44.2716 120.383 48.8208 118.38 53.3372C117.227 55.9336 115.301 57.3627 112.417 57.4391C111.601 57.4609 110.774 57.5373 109.958 57.5918C109.382 57.6355 109.12 57.9082 109.229 58.5082C109.425 59.5555 109.36 60.6028 109.229 61.661C109.11 62.5773 109.229 62.7192 110.143 62.6973C111.351 62.6755 112.559 62.6755 113.756 62.8501C116.476 63.2319 118 65.021 119.022 67.3992C120.72 71.3375 120.948 75.363 119.741 79.4648C119.36 80.7739 118.827 82.0394 117.804 83.0103C116.639 84.1013 115.225 84.2649 113.832 83.5013C112.864 82.9667 112.494 82.094 112.515 81.0576C112.537 79.8903 113.234 79.1703 114.246 78.723C115.083 78.3521 115.954 78.0357 116.803 77.6539C120.394 76.0502 120.535 71.7738 117.401 69.4938C116.248 68.6538 114.866 68.3701 113.495 68.1956C111.808 67.9774 110.122 67.9883 108.435 68.2501C105.965 68.632 104.681 70.2793 103.821 72.4175C102.831 74.8721 102.32 77.4903 101.395 79.9667C99.806 84.2104 95.7255 85.9013 91.7211 85.2358C88.0106 84.6249 85.7799 81.2867 85.7581 77.6866C85.7472 76.1921 85.8125 74.7193 86.3566 73.2902C86.9986 71.5993 88.2282 70.3556 89.3707 69.0465C90.0127 68.3156 90.0236 68.3265 89.2293 67.8247C88.9681 67.661 88.7178 67.4865 88.4458 67.3338C86.4545 66.1883 85.6058 64.3774 85.4861 62.1519C85.4208 60.9519 85.4317 60.941 84.2021 60.941C82.3305 60.941 80.4589 60.941 78.5764 60.941C76.7266 60.941 74.8767 60.941 73.0269 60.941L72.9834 61.0064ZM102.189 68.1629C99.8495 68.141 97.51 68.2392 95.1923 68.5229C92.5263 68.8392 90.0236 69.5811 88.1955 71.8066C86.4545 73.9229 86.7918 76.9448 88.9899 78.3412C90.1107 79.0503 91.3512 79.3776 92.6351 79.4103C96.2695 79.4867 99.0552 77.9048 101.003 74.8393C102.298 72.7993 103.462 70.672 105.029 68.8174C105.149 68.6756 105.29 68.5447 105.203 68.3483C105.116 68.141 104.898 68.1847 104.724 68.1847C103.876 68.1847 103.027 68.1847 102.178 68.1847L102.189 68.1629ZM52.6135 95.3269C52.5482 92.3268 52.6896 89.3159 51.7538 86.3922C51.1445 84.494 50.1869 82.8903 48.3806 81.8976C46.1826 80.6867 43.7125 81.4721 42.6352 83.7631C40.8507 87.5704 42.1456 92.6105 45.5297 95.1196C47.6515 96.7014 49.9366 98.0215 51.9279 99.7778C52.0367 99.876 52.1456 100.029 52.3197 99.9524C52.5264 99.8651 52.472 99.6469 52.4938 99.4724C52.6135 98.0869 52.6352 96.7014 52.6135 95.316V95.3269ZM28.2609 79.4539C28.8594 79.4976 29.6973 79.4103 30.5134 79.1485C32.1021 78.6466 33.4622 77.8285 33.941 76.1375C34.4416 74.392 33.9193 72.8429 32.6897 71.5229C31.0139 69.7338 28.8159 69.1011 26.4982 68.7738C23.2011 68.3047 19.8932 68.5556 16.5852 68.5992C16.3458 68.5992 16.0303 68.5447 15.9106 68.8392C15.8127 69.0792 16.0085 69.2756 16.1609 69.4502C17.5972 71.0429 18.6853 72.8757 19.8496 74.6648C21.7756 77.6212 24.3219 79.5194 28.2609 79.4539ZM67.7603 94.6287C67.6297 96.2214 67.8909 97.8142 67.8691 99.4069C67.8691 99.6033 67.8256 99.8542 68.0541 99.9524C68.2826 100.061 68.435 99.8542 68.5873 99.7233C69.2511 99.156 69.8931 98.5778 70.6221 98.076C72.0802 97.0723 73.571 96.1123 74.9747 95.0323C78.2173 92.5341 79.4904 87.8104 77.8909 84.0576C76.9551 81.854 74.9747 80.8176 72.9616 81.5049C70.7309 82.2685 69.4905 83.9376 68.7723 86.0976C67.8474 88.8686 67.8365 91.7486 67.7821 94.6287H67.7603ZM52.5591 26.6423C52.5591 25.3114 52.5591 23.9695 52.5591 22.6386C52.5591 22.4422 52.6787 22.1913 52.4611 22.0713C52.2108 21.9295 52.0259 22.1695 51.8626 22.3004C50.7201 23.1623 49.6646 24.1441 48.435 24.9077C47.4339 25.5187 46.4655 26.2059 45.5297 26.9259C42.287 29.4023 40.9813 34.2351 42.5917 37.9661C43.8322 40.8352 46.6831 41.5443 49.1641 39.657C50.818 38.3916 51.5906 36.6352 52.0694 34.7151C52.7332 32.0751 52.657 29.3587 52.5808 26.6641L52.5591 26.6423ZM67.8691 26.8387C67.8039 28.4423 67.8583 30.3951 68.0432 32.3369C68.2609 34.5297 68.7614 36.6461 70.1433 38.4461C70.8615 39.3843 71.7973 40.0716 72.9181 40.4316C75.584 41.2934 77.5753 39.6025 78.2935 36.777C79.349 32.6315 77.7168 28.606 74.1477 26.2496C72.2652 25.0059 70.3827 23.7514 68.6526 22.3004C68.4894 22.1586 68.3262 21.9077 68.065 22.0604C67.8256 22.1913 67.88 22.4641 67.88 22.6932C67.88 23.9586 67.88 25.2132 67.88 26.8278L67.8691 26.8387ZM98.4023 52.7154C98.4023 52.6499 98.4023 52.5845 98.4023 52.519C100.328 52.519 102.243 52.519 104.169 52.519C104.409 52.519 104.735 52.6063 104.844 52.3008C104.931 52.0608 104.681 51.8863 104.528 51.7226C103.451 50.479 102.461 49.1808 101.591 47.7735C100.774 46.4426 99.893 45.1226 98.7069 44.0862C96.6939 42.308 94.3 41.6643 91.6449 41.8825C90.1107 42.0025 88.7505 42.548 87.6297 43.6171C86.5307 44.6644 86.2043 45.9844 86.6286 47.4353C87.2815 49.6608 88.8484 51.0135 90.9594 51.7881C93.3642 52.6718 95.8778 52.6936 98.3914 52.7263L98.4023 52.7154ZM20.8616 52.8463C22.2218 52.8463 23.582 52.9227 24.9421 52.8245C27.4013 52.6608 29.7408 52.0936 31.7756 50.5554C33.0705 49.5844 34.2566 46.9553 33.8322 45.5371C33.299 43.7589 32.1021 42.7989 30.5243 42.2862C27.0313 41.1625 23.1249 42.3734 20.8616 45.1662C19.0553 47.4026 17.8366 50.0535 15.9541 52.2572C15.5515 52.7263 15.8671 52.8463 16.3241 52.879C17.8366 52.9663 19.3491 52.9008 20.8616 52.8354V52.8463ZM102.385 57.7991C98.4893 57.9627 95.2358 58.0827 91.9823 58.2464C90.8832 58.3009 89.7842 58.5082 88.8593 59.1846C87.5971 60.1119 87.6188 61.3119 88.9246 62.1737C89.4469 62.5119 89.991 62.741 90.6221 62.8283C91.7429 62.981 92.8637 63.0792 93.9953 63.0573C97.3468 62.9919 100.709 62.9373 104.061 62.8828C104.877 62.8719 105.704 62.8828 106.52 62.861C107.564 62.8283 107.673 62.7301 107.717 61.7155C107.76 60.7446 107.717 59.7628 107.641 58.7918C107.586 58.0391 107.227 57.7773 106.498 57.7991C104.909 57.8318 103.321 57.7991 102.374 57.7991H102.385ZM57.7168 93.0905C57.7168 96.7342 57.7277 99.2215 57.7168 101.72C57.7168 102.32 57.9344 102.614 58.5329 102.702C59.6102 102.865 60.6657 102.909 61.7429 102.691C62.472 102.549 62.7005 102.232 62.6896 101.502C62.6461 97.0287 62.6896 92.5559 62.6134 88.0831C62.5917 86.7631 62.5155 85.4104 62.0041 84.1449C61.6776 83.3485 61.2097 82.6176 60.2848 82.574C59.349 82.5303 58.8267 83.2067 58.4459 83.9813C57.978 84.9522 57.9127 86.0104 57.8583 87.0686C57.7386 89.4577 57.7059 91.8468 57.7277 93.0905H57.7168ZM21.2533 58.2464C18.8703 58.2464 16.4873 58.2464 14.1043 58.2355C13.4732 58.2355 13.1685 58.4427 13.1032 59.0973C13.0053 60.1228 13.0053 61.1482 13.1032 62.1737C13.212 63.2755 13.3208 63.3737 14.4416 63.3519C18.0325 63.2973 21.6233 63.2537 25.2033 63.1883C26.4546 63.1664 27.7169 63.1555 28.9682 63.0573C29.9911 62.981 31.003 62.7628 31.8736 62.1519C33.1793 61.2246 33.1358 60.0137 31.7756 59.1518C30.546 58.3664 29.1532 58.3009 27.7822 58.2573C25.6059 58.2027 23.4187 58.2464 21.2425 58.2464H21.2533ZM57.7277 27.3732C57.7277 27.3732 57.7821 27.3732 57.8039 27.3732C57.8039 28.246 57.8039 29.1187 57.8039 29.9914C57.8039 30.8969 57.8148 31.7915 57.8039 32.6969C57.8039 34.0388 57.88 35.3697 58.0977 36.6897C58.2391 37.5079 58.4894 38.2934 59.0988 38.8934C59.7952 39.5807 60.6439 39.5916 61.3403 38.8934C61.9062 38.3261 62.2108 37.6279 62.3305 36.8424C62.5373 35.4679 62.6461 34.0824 62.6461 32.6969C62.6461 28.5841 62.6461 24.4605 62.6787 20.3477C62.6787 19.5949 62.4176 19.2567 61.6885 19.2131C60.6874 19.1586 59.6972 19.1149 58.6961 19.2458C57.978 19.344 57.6951 19.6604 57.7168 20.4022C57.7603 22.715 57.7277 25.0277 57.7277 27.3514V27.3732Z" fill={fill} />
    </g>
    <defs>
      <clipPath id="clip0_18_132">
        <rect width="120" height="120" fill="white" transform="translate(0.5 0.957275)" />
      </clipPath>
    </defs>
  </svg>
);

export default AudacityCapital;
