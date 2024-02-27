        <script setup lang="ts">
        
        </script>
<template>
      <div className="m-t-60px blog-body__down">
      <h3 className="heading-3">Categories</h3>
      <div className="tab-area">
        <div className="tab-area__buttons">
          <button
            className={`textM tab-area__buttons-button ${
              buttonActive == "Resources".toLocaleLowerCase()
                ? "tab-active"
                : ""
            }`}
            onClick={(e) => handleFilterData(e)}
          >
            Resources
          </button>
          <button
            className={`textM tab-area__buttons-button ${
              buttonActive == "Articles".toLocaleLowerCase() ? "tab-active" : ""
            }`}
            onClick={(e) => handleFilterData(e)}
          >
            Articles
          </button>
          <button
            className={`textM tab-area__buttons-button ${
              buttonActive == "News".toLocaleLowerCase() ? "tab-active" : ""
            }`}
            onClick={(e) => handleFilterData(e)}
          >
            News
          </button>
        </div>
        <div className="slider-buttons">
          <button className="customerSliderNext blog-slider-button">
            <ArrowLeft2 />
          </button>
          <button className="customerSliderPrev blog-slider-button">
            <ArrowRight2 />
          </button>
        </div>
      </div>

      {/* slider area */}
      <div className="m-t-40px">
        <Swiper
          slidesPerView={1}
          spaceBetween={6}
          speed={1400}
          loop={true}
          modules={[Navigation, Autoplay]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".customerSliderNext",
            prevEl: ".customerSliderPrev",
          }}
          breakpoints={{
            768: {
              spaceBetween: 12,
              slidesPerView: 2,
            },
            992: {
              spaceBetween: 12,
              slidesPerView: 3,
            },
            1200: {
              spaceBetween: 24,
              slidesPerView: 3,
            },
          }}
        >
          {filterData.map(({ ...props }, index) => (
            <SwiperSlide key={`blog-slider${index}`}>
              <BlogSliderItem {...props} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
</template>


<style scoped>

</style>